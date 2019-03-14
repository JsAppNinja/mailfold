class AppsController < ApplicationController
  before_action :set_app, only: [:show]

  # GET /apps
  # GET /apps.json
  def index
    @apps = App.all
  end

  # GET /apps/1
  # GET /apps/1.json
  def show
  end


  private
    def set_app
      @app = App.find(params[:id])
    end

end
