class OffersController < CompanyRelationsController
  self.permitted_attrs = [:category, { :offer => [] }, :company_id]
end
