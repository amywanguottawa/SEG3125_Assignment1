        // Initializes  input( name of states)
        // with a typeahead
        var $input = $(".typeahead");
        $input.typeahead({
            source: [
                "Victoria, British Columbia, Canada",
                "Edmonton, Alberta, Canada",
                "Yellowknife, Northwest Territories, Canada",
                "Iqaluit, Nunavut, Canada",
                "Whitehorse, Yukon, Canada",
                "Regina, Saskatchewan, Canada",
                "Winnipeg, Manitoba, Canada",
                "Toronto, Ontario, Canada",
                "Quebec City, Quebec, Canada",
                "Fredericton New Brunswick, Canada",
                "Charlottetown, Prince Edward Island, Canada",
                "Halifax, Nova Scotia, Canada",
                "St-John's, Newfoundland and Labrador, Canada",
                ],
            autoSelect: true,
        });
  
        $input.change(function () {
            var current = $input.typeahead("getActive");
            matches = [];
  
            if (current) {
  
                // Some item from your input matches
                // with entered data
                if (current.name == $input.val()) {
                    matches.push(current.name);
                }
            }
        });
        