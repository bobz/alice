class Seed
	def self.claim_types
	  ClaimType.delete_all
 
	  ClaimType.create!({
	      string_ref: "PAID",
	      description: "This group has paid this much for this line item"
	    })
	  ClaimType.create!({
	      string_ref: "OWES",
	      description: "This group owes this much for this line item"
	    })
	end
end
