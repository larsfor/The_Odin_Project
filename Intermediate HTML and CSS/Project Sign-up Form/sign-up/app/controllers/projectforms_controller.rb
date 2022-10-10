class ProjectformsController < ApplicationController
  before_action :set_projectform, only: %i[ show edit update destroy ]

  # GET /projectforms or /projectforms.json
  def index
    @projectforms = Projectform.all
  end

  # GET /projectforms/1 or /projectforms/1.json
  def show
  end

  # GET /projectforms/new
  def new
    @projectform = Projectform.new
  end

  # GET /projectforms/1/edit
  def edit
  end

  # POST /projectforms or /projectforms.json
  def create
    @projectform = Projectform.new(projectform_params)

    respond_to do |format|
      if @projectform.save
        format.html { redirect_to projectform_url(@projectform), notice: "Projectform was successfully created." }
        format.json { render :show, status: :created, location: @projectform }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @projectform.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projectforms/1 or /projectforms/1.json
  def update
    respond_to do |format|
      if @projectform.update(projectform_params)
        format.html { redirect_to projectform_url(@projectform), notice: "Projectform was successfully updated." }
        format.json { render :show, status: :ok, location: @projectform }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @projectform.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projectforms/1 or /projectforms/1.json
  def destroy
    @projectform.destroy

    respond_to do |format|
      format.html { redirect_to projectforms_url, notice: "Projectform was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_projectform
      @projectform = Projectform.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def projectform_params
      params.fetch(:projectform, {})
    end
end
