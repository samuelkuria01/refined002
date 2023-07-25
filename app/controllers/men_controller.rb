class MenController < ApplicationController
  before_action :set_man, only: %i[ show update destroy ]

  # GET /men
  def index
    @men = Man.all

    render json: @men
  end

  # GET /men/1
  def show
    render json: @man
  end

  # POST /men
  def create
    @man = Man.new(man_params)

    if @man.save
      render json: @man, status: :created, location: @man
    else
      render json: @man.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /men/1
  def update
    if @man.update(man_params)
      render json: @man
    else
      render json: @man.errors, status: :unprocessable_entity
    end
  end

  # DELETE /men/1
  def destroy
    @man.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_man
      @man = Man.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def man_params
      params.require(:man).permit(:name, :price, :description, :image)
    end
end
