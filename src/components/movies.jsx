import React, { Component } from 'react';
eslint-disable-next-line;
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
    state = {  
        movi: getMovies() 
    };
    render() { 
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genra</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.movi.map(moviwe => (
                            <tr>
                                <td>{moviwe.title}</td>
                                <td>{moviwe.genre.name}</td>
                                <td>{moviwe.numberInStock}</td>
                                <td>{moviwe.dailyRentalRate}</td>
                            </tr>
                     ))
                }
                </tbody>
            </table>
          );
    }
}
 
export default Movies;