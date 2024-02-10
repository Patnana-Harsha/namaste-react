# Nameste React


# parcel
- Dev Build
- Local Server
- HMR = hot module Replacement
- File watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimisation
- Minification - in production build it will bundle and minifi, compress, optimise the code
- Bundling
- Compressing
- Consistent Hasing - it kepps a track of code(Need to get from parcel website Parcel.org )
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Browsers list
website - Browserslist.dev
in package.json file-
   Add an array in name of browsers list 
   # Syntax :-
           "browserslist":[
            "last 2 versions"
           ]
# Food ordering app
/* 
* Header
* -Logo
* -Nav-items
* Body
*  -Search
*  -RestaurantContainer
*    -ReastaurantCard 
* Footer
* -Copyright
* -Links
* -Address
* -Contact
*/

# Two types of Export/Import

- Default Export/Import
export default component;
import component from "path";

- Named Export/Import
export const Component;
import {Component} from "path";

