class CreateProductsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :products_tables do |t|
      t.string :first
      t.string :middle
      t.string :last
      t.string :address
      t.string :city
      t.string :state
      t.string :zip

      t.timestamps
    end
  end
end
