class UsersController < ApplicationController

before_action :authenticate_user!

  def show
    render "users/show"
  end

end
