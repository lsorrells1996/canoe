class AdventuresController < ApplicationController
    def create 
        render json: Adventure.create!(adventure_params), status: :created
    end

    private

    def adventure_params
        params.permit(:title, location_list: [
            :wikiDataId, :type, :city, :country, :countryCode, :region, :poplulation
        ])
    end
end
