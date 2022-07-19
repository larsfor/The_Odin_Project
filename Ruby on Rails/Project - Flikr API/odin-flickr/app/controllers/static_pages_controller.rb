require 'flickr'

class StaticPagesController < ApplicationController
  def index
    flickr = Flickr.new(ENV["flickr_api_key"], ENV["flickr_secret_key"])
    user = params[:user_id]
    if user.nil?
      return
    else
      photos = flickr.photos.search(api_key: ENV["flickr_api_key"], user_id: user)
      info = photos.map {|p| p }
      @urls = info.map {|u| Flickr.url(u)}
    end
  end
end
