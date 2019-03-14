class Product < ApplicationRecord
  def self.to_csv(fields = column_names, options = {})
    CSV.generate(options) do |csv|
      csv << fields
      all.each do |product|
        csv << product.attributes.values_at(*fields)
      end
    end
  end

  def self.import(filepath)
    filecontent = File.read(filepath)
    products = CSV.parse(filecontent, :headers => true, :encoding => "ISO-8859-1")
    products.each do |row|
      product_hash = row.to_hash
      Product.create(first: product_hash["Dejan"], middle: product_hash[nil], last: product_hash["Sabados"], address: product_hash["1 Oak St"], city: product_hash["Morrisville"], state: product_hash["NJ"], zip: product_hash["12590"])
    end
  end
end
