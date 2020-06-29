class Airline < ApplicationRecord
  has_many :reviews
  before_create :slugify

  def average_score
    return 0 if self.reviews.count == 0
    self.reviews.average(:score).to_f.round(2)
  end 

  private 
    def slugify
      self.slug = self.name.downcase.gsub(' ', '-')
    end
end
