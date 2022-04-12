class LocationsController < ApplicationController
    # require 'rest-client'
    # require 'JSON'
    require 'uri'
    require 'net/http'
    require 'openssl'

    def fetch_data
        city = params[:city]
        country_code = params[:country_code]

        url = URI("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=#{country_code}&minPopulation=200000&namePrefix=#{city}")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["X-RapidAPI-Host"] = 'wft-geo-db.p.rapidapi.com'
        request["X-RapidAPI-Key"] = GEODB_API_KEY

        response = http.request(request)

        render json: response.read_body, status: :ok
    end

end
# require 'uri'
# require 'net/http'
# require 'openssl'

# url = URI("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=500000&namePrefix=Austin")

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Get.new(url)
# request["X-RapidAPI-Host"] = 'wft-geo-db.p.rapidapi.com'
# request["X-RapidAPI-Key"] = 'a393845950msh1cdf3f480dae5acp1cd891jsn88f22e250672'

# response = http.request(request)
# puts response.read_body