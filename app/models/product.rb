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
      Product.create(first: product_hash.values[0], middle: product_hash.values[1], last: product_hash.values[2], address: product_hash.values[3], city: product_hash.values[4], state: product_hash.values[5], zip: product_hash.values[6])
    end
  end
end
