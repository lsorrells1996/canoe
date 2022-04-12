class PlannedAdventuresController < ApplicationController
    def create 
        render json: PlannedAdventure.create!(adventure_params), status: :created
    end

    def index 
        render json: PlannedAdventure.where(user_id:[current_user.id]), status: :ok
    end

    def show
        render json: PlannedAdventure.find(params[:id]), status: :ok
    end


    private

    def adventure_params
        params.permit(:user_id, :title, location_list: [
            :wikiDataId, :type, :city, :country, :countryCode, :region, :poplulation
        ])
    end
end
