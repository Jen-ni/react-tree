/* eslint-disable react/no-find-dom-node, prefer-rest-params */
import React from 'react';

export default class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const style = {
      border: 'thin solid',
      width: '50%',
    };

    return (
      <table style={style}>
        <thead style={style}>
          <tr>
            <td>English</td>
            <td>Deutsch</td>
            <td>Español</td>
            <td>suomi</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hello!</td>
            <td>Hallo!</td>
            <td>¡Hola!</td>
            <td>Hei!</td>
          </tr>
          <tr>
            <td>Thank you</td>
            <td>Danke</td>
            <td>Gracias</td>
            <td>Kiitos</td>
          </tr>
          <tr>
            <td>Sorry</td>
            <td>Entschuldigung</td>
            <td>Perdón</td>
            <td>Anteeksi</td>
          </tr>
          <tr>
            <td>Bye bye!</td>
            <td>Tschüss!</td>
            <td>¡Adiós!</td>
            <td>Hei hei!</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
