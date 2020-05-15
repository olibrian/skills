# encoding: utf-8

class CompanySeeder
  def seed_companies(companies)
    companies.each do |name|
      Company.seed_once(:name) do |co|
        co.name = name
      end
    end
  end
end

