class MetadataController < ApplicationController
  def index
    render json: Metadata.all
  end
end
