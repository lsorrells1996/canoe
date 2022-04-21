class PlannedAdventuresController < ApplicationController
    def create 
        render json: PlannedAdventure.create!(adventure_params), status: :created
    end

    def index 
        render json: PlannedAdventure.where(user_id:[current_user.id]), includes: ['planned_adventure_comments'], status: :ok
    end

    def show
        render json: PlannedAdventure.find(params[:id]), status: :ok
    end


    private

    def adventure_params
        params.permit(:user_id, :title, :trip_start, :trip_end, location_list: [
            :wikiDataId, :type, :city, :country, :countryCode, :region, :poplulation
        ])
    end
end
