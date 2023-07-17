               function product(evt, item) {
                // Declare all variables
                var i, tabcontent, shopfor;
            
                // Get all elements with class="tabcontent" and hide them
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
            
                // Get all elements with class="shopfor" and remove the class "active"
                shopfor = document.getElementsByClassName("shopfor");
                for (i = 0; i < shopfor.length; i++) {
                    shopfor[i].className = shopfor[i].className.replace(" active", "");
                }
            
                // Show the current tab, and add an "active" class to the button that opened the tab
                document.getElementById(item).style.display = "block";
                evt.currentTarget.className += " active";
            }