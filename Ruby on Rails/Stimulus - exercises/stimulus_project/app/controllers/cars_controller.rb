class CarsController < ApplicationController
  def new
    @car = Car.new
    1.times { @car.variants.build }
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      flash[:notice] = "Car has been made!"
      redirect_to @car
    else
      render :new
    end
  end

  def show
    @car = Car.find_by(id: params[:id])
  end

  private

  def car_params
    params.require(:car).permit(variants_attributes: %i[model, color, seats, horsepower, engine_volume])
  end
end
