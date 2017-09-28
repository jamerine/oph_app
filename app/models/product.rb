class Product < ApplicationRecord
  has_many :order_items

  default_scope { where(active: true) }

  enum product_type: [:crepes, :egg_specialties, :kids, :omelettes, :pancakes, :specialties, :waffles]

  # validations
  validates :name, presence: true
  validates :price, presence: true
  validates :short_description, presence: true
  validates :long_description, presence: true

end
