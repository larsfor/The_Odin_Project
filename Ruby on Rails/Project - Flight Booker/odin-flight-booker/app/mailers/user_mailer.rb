class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_email
        @user = params[:user]
        @url = 'http://example.com/login'
        mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end

    def booking_confirmation
        @booking = Booking.find(params[:booking_id])
        @url = 'http://example.com/login'
        mail(to: @booking.passengers.pluck(:email), subject: 'Welcome to My Awesome Site')
    end
end
