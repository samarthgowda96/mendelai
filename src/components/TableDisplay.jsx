import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Button from '@material-ui/core/Button';

//Making Styles
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
//Sorting the data based on the key
  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    return { items: sortedItems, requestSort, sortConfig };
  };

//Main Function
const TableDisplay=({totalLocations})=>{
    const { items, requestSort, sortConfig } = useSortableData(totalLocations);

    const classes = useStyles();
   
    
    return (
    
    <TableContainer style={{backgroundColor:"#bdd4e7"}}component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('number')}
                    >
                    Number
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('name')}
                    >
                    Name
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('city')}
                    >
                    City
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('state')}
                    >
                    State
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('country')}
                    >
                    Country
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('postcode')}
                    >
                    Postcode
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('latitude')}
                    >
                    Latitude
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('longitude')}
                    >
                    Longitude
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('offset')}
                    >
                    Offset
                </Button>
              </TableCell>
              <TableCell align="left">
                 <Button
                    type="button"
                    onClick={() => requestSort('description')}
                    >
                    Description
                </Button>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.number}>
              <TableCell align="left" >
                  {item.number}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.city}</TableCell>
              <TableCell align="left">{item.state}</TableCell>
              <TableCell align="left">{item.country}</TableCell>
              <TableCell align="left">{item.postcode}</TableCell>
              <TableCell align="left">{item.latitude}</TableCell>
              <TableCell align="left">{item.longitude}</TableCell>
              <TableCell align="left">{item.offset}</TableCell>
              <TableCell align="left">{item.description}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default TableDisplay;