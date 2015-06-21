class PagesController < ApplicationController
  def index
  end

  def about
  end 

  def contact
  end 

  def comingsoon
  	render :layout => 'coming_soon_layout'
  end
end
