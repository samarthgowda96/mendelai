
import TableDisplay from './TableDisplay'


const Locations =({users})=>{
    //flattening the object as required
    
    const flattenData = (obj, flattenDict) => {
        var keys = Object.keys(obj)

        for (var i = 0; i < keys.length; i++) {
            var value = obj[keys[i]]
            if(typeof value === 'object' ) {
                flattenData(value, flattenDict)
            } else {
                flattenDict[keys[i]] = value
            }
        }
    }

    const parseData = (obj) => {
        var locationObj = obj["location"]
        var flattenLocationObj = {}
        flattenData(locationObj, flattenLocationObj)
        return flattenLocationObj
    }

    var totalLocations=[]
    for (var j = 0; j < users.length; j++) {
        var parsedDictionary= parseData(users[j])
        console.log(parsedDictionary)
        totalLocations.push(parsedDictionary)
     }
    
    return(
        <div>
             <TableDisplay totalLocations={totalLocations}/>
        </div>
    )

}

export default Locations;