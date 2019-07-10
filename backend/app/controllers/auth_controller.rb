class AuthController < ApplicationController
  def login
    # check if my params contain the entered username and password
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])

      @token = encode_token(@user.id)

      render json: {user: @user, token: @token}

      # render json: user
    else
      render json: {errors: "You dun goofed!"}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: {errors: "No one has signed in!"}
    end
  end
end
