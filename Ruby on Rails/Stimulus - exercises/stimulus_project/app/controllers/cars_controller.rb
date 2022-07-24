class CarsController < ApplicationController
  def index
    @cars = Car.all
  end

  def new
    @car = Car.new
    1.times { @car.variants.build }
  end

  def create
    @car = Car.new(car_params)

    respond_to do |format|
      if @car.save
          format.html { redirect_to car_url(@car), notice: "Car was successfully created." }
          format.json { render :show, status: :created, location: @car }
      else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @car.errors, status: :unprocessable_entity }
      end
    end

    def show
      @car = Car.find_by(id: params[:id])
    end
  end

  private

  def car_params
    params.require(:car).permit(:id, variants_attributes: %i[model, color, seats, horsepower, engine_volume])
  end
end
