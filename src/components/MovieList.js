import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';

const MovieList = (props) => {
    const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>{props.title}</th>
                        <th>{props.Director}</th>
                        <th>{props.Genre}</th>
                        <th>{props.Metascore}</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
                    }
                </tbody>
            </table>

            <MovieFooter totalMovies={movies.length} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        title: state.title,
        director: state.director,
        metascore: state.metascore,
        genre: state.genre,
        description: state.description,
    }
}

export default connect(mapStateToProps,)(MovieList);