import React, { useState } from "react";
import img from '../../src/img/imagen_vocalista.jpg'
import img1 from '../../src/img/imagen_vocalista.jpg'
import img2 from '../../src/img/imagen_vocalista.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';


const data = [
    { id: 1, portada: img, titulo: 'Artista', fecha: 'Agosto 2022, Guadalajara, México', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo asperiores, culpa iusto assumenda repellat, deserunt soluta sapiente laborum quia impedit laudantium ullam illum cum ipsum iste, molestiae temporibus veniam distinctio!' },
    { id: 2, portada: img1, titulo: 'Artista', fecha: 'Agosto 2022, Guadalajara, México', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo asperiores, culpa iusto assumenda repellat, deserunt soluta sapiente laborum quia impedit laudantium ullam illum cum ipsum iste, molestiae temporibus veniam distinctio!' },
    { id: 3, portada: img2, titulo: 'Artista', fecha: 'Agosto 2022, Guadalajara, México', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo asperiores, culpa iusto assumenda repellat, deserunt soluta sapiente laborum quia impedit laudantium ullam illum cum ipsum iste, molestiae temporibus veniam distinctio!' },
];






class Eventos extends React.Component {
    // return(
    //     <div id="eventos" class="eventos">
    //     <section class="contenedor sobre-festival">
    //         <div class="imagen">
    //             <picture>
    //                 <img loading="lazy" width="200" height="300" src={img1}
    //                     alt="imagen vocalista"/>
    //             </picture>
    //         </div>
    //         <div class="contenido-festival">
    //             <h2>Artista</h2>
    //             <p class="fecha">Agosto 2022, Guadalajara, México</p>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos
    //                 repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga
    //                 asperiores maxime distinctio rem doloremque?</p>
    //         </div>
    //     </section>
    //     <section class="contenedor sobre-festival">
    //         <div class="imagen">
    //             <picture>
    //                 <img loading="lazy" width="200" height="300" src={img}
    //                     alt="imagen vocalista"/>
    //             </picture>
    //         </div>
    //         <div class="contenido-festival">
    //             <h2>Artista</h2>
    //             <p class="fecha">Septiembre 2022, México DF</p>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos
    //                 repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga
    //                 asperiores maxime distinctio rem doloremque?</p>
    //         </div>
    //     </section>
    //     <section class="contenedor sobre-festival">
    //         <div class="imagen">
    //             <picture>
    //                 <img loading="lazy" width="200" height="300"
    //                     src={img2} alt="imagen vocalista"/>
    //             </picture>
    //         </div>
    //         <div class="contenido-festival">
    //             <h2>Artista</h2>
    //             <p class="fecha">Julio 2022, Acapulco, México</p>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor expedita nulla dignissimos
    //                 repellendus corporis excepturi enim eum? Tenetur rerum excepturi natus dicta ullam sit, fuga
    //                 asperiores maxime distinctio rem doloremque?</p>
    //         </div>
    //     </section>
    // </div>
    // );

    state = {
        data: data,
        form: {
            id: '',
            portada: '../../src/img/imagen_vocalista.jpg',
            titulo: '',
            fecha: '',
            descripcion: ''
        },
        modalInsertar: false,
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true });
    }

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    }

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ data: lista, modalInsertar: false });
    }



    render() {
        return (
            <>
                <Container>

                    <br />
                    <Button color="primary" onClick={() => this.mostrarModalInsertar()}>Insertar nuevo concierto</Button>
                    <br />

                    <Table>
                        
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td><img src={elemento.portada} alt="" /></td>
                                    <td><h3>{elemento.titulo}</h3></td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.descripcion}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Container>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Evento</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Titulo:
                            </label>
                            <input
                                className="form-control"
                                name="titulo"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Fecha y lugar del evento:
                            </label>
                            <input
                                className="form-control"
                                name="fecha"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Descripcion:
                            </label>
                            <input
                                className="form-control"
                                name="descripcion"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>)
    }
}

export default Eventos;