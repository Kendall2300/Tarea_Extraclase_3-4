import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            edad: '',
            contrasena: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const edad = event.target.validity.valid
            ? event.target.value
            : this.state.edad

        this.setState({ edad })
    }

    handleChangeInputTime = async event => {
        const contrasena = event.target.value
        this.setState({ contrasena })
    }

    handleUpdateMovie = async () => {
        const { id, name, edad, contrasena } = this.state
        const arrayTime = contrasena.split('/')
        const payload = { name, edad, contrasena: arrayTime }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`User updated successfully`)
            this.setState({
                name: '',
                edad: '',
                contrasena: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            edad: movie.data.data.edad,
            contrasena: movie.data.data.contrasena.join('/'),
        })
    }

    render() {
        const { name, edad, contrasena } = this.state
        return (
            <Wrapper>
                <Title>Create User</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Edad: </Label>
                <InputText
                    type="number"
                    lang="en-US"
                    min="0"
                    max="100"
                    value={edad}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Contrasena: </Label>
                <InputText
                    type="text"
                    value={contrasena}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdateMovie}>Update User</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate