class ProductsController < ApplicationController
    require 'csv'
    before_action :set_product, only: [:show, :edit, :update, :destroy]

    def index
      csv_text = File.read(Rails.root.join("lib", "csvs", "userInfo.csv"))
      csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")
      @products = csv
      respond_to do |format|
        format.html
        format.csv { send_data @products }
      end
      Product.create(first: "David", middle: "M", last: "Crawford", address: "Test", city: "New York", state: "NY", zip: "19203")
    end
  
    def import
      Product.import(params[:file])
      redirect_to root_url, notice: "Products imported."
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
  