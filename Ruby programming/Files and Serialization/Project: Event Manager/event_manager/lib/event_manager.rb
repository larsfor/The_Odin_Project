# frozen_string_literal: true

require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'
require 'time'
require 'date'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5, '0')[0..4]
end

def clean_phone_number(homephone)
  # Remove everything that's not a digit
  homephone = homephone.gsub(/[^0-9]/, '')
  puts
  # The number must be between 10 and 11 characters long using Regex.
  # If it's longer than 10, it must have a '1' first, or else it's bad.
  if homephone.match(/1*\d{10,11}/)
    homephone.to_s.rjust(11, '1')[1..-1]
  else
    'Bad number.'
  end
end

def hashed_time_and_days(contents)
  time_and_date = []
  days = Hash.new(0)
  hours = Hash.new(0)

  contents.each do |row|
    time_and_date.push(row[:regdate])
  end

  time_and_date.each do |time|
    day = Date.strptime(time, '%m/%d/%y')
    days[day.wday] += 1
    hour = Time.strptime(time, '%m/%d/%y %H:%M')
    hours[hour.hour] += 1
  end

  puts "Days #{days}"
  puts "Hours #{hours}"
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    legislators = civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: %w[legislatorUpperBody legislatorLowerBody]
    )
    legislators = legislators.officials
    legislators_names = legislators.map(&:name)
    legislators_names.join(' ')
  rescue StandardError
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id, form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') { |file| file.puts(form_letter) }
end

puts 'EventManager initialized.'

contents = CSV.open(
  'event_attendees.csv',
  headers: true,
  header_converters: :symbol
)

template_letter = File.read('form_letter.erb')
erb_template = ERB.new(template_letter)

hashed_time_and_days(contents)

contents.each do |row|
  # id = row[0]

  name = row[:first_name]

  # zipcode = clean_zipcode(row[:zipcode])

  # phone_number = clean_phone_number(row[:homephone])

  # registration_date = row[:regdate]

  # legislators = legislators_by_zipcode(zipcode)

  # form_letter = erb_template.result(binding)

  # save_thank_you_letter(id, form_letter)

  puts "#{name} #{registration_date}"
end
