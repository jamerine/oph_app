class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.decimal   :subtotal, :precision => 12, :scale => 2
      t.decimal   :tax, :precision => 12, :scale => 2
      t.decimal   :total, :precision => 12, :scale => 2
      t.string :billing_first_name
      t.string :billing_last_name
      t.string :billing_email
      t.string :billing_branch_number
      t.string :billing_phone_number
      t.string :billing_address_line_1
      t.string :billing_address_line_2
      t.string :billing_city
      t.string :billing_state
      t.integer :billing_zip_code
      t.references :order_status, foreign_key: true

      t.timestamps
    end
  end
end
