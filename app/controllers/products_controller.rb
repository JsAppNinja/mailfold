class ProductsController < ApplicationController
    require 'csv'
    attr_reader :filepath
    before_action :set_product, only: [:show, :edit, :update, :destroy]

    def index
      @filepath = Rails.root.join("lib", "csvs", "userInfo.csv")
      filecontent = File.read(@filepath)
      @products  = CSV.parse(filecontent, :headers => true, :encoding => "ISO-8859-1")
      respond_to do |format|
        format.html
        format.csv { send_data @products }
      end
      # Product.import(@filepath)
    end
  
    def import
      Product.import(Rails.root.join("lib", "csvs", "userInfo.csv"))
    end
  
    def new
      @product = Product.new
    end
  
    def create
      @product = Product.new(product_params)
  
      respond_to do |format|
        if @product.save
          format.html { redirect_to @product, notice: 'Product was successfully created.' }
          format.json { render :show, status: :created, location: @product }
        else
          format.html { render :new }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end
  
    def update
      respond_to do |format|
        if @product.update(product_params)
          format.html { redirect_to @product, notice: 'Product was successfully updated.' }
          format.json { render :show, status: :ok, location: @product }
        else
          format.html { render :edit }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end
  
    def destroy
      @product.destroy
      respond_to do |format|
        format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
        format.json { head :no_content }
      end
    end
  
    private
      def set_product
        @product = Product.find(params[:id])
      end
  
      def product_params
        params.require(:product).permit(:name, :category, :price)
      end
  end
  