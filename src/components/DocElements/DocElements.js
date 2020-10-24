import React from 'react';

import * as ElementTypes from '../../constants/ElementTypes';
import classes from './DocElements.module.css';

const Snippet = (props) => {
  return (
    <>
      <label for='snippet'>Snippet:</label>
      <input id='snippet' type='text' placeholder='Digite o Snippet'/>
    </>
)};

const LongTitle = (props) => {
  return (
    <>
      <label for='longTitle'>Título Longo:</label>
      <input id='longTitle' type='text' placeholder='Digite o Título Longo'/>
    </>
)};

const LongDescription = (props) => {
  return (
    <>
    <label for='longDescription'>Descrição Longa:</label>
    <textarea id='longDescription' placeholder='Digite o Descrição Longa'/>
  </>
)};

const Title = (props) => {
  return (
    <>
      <label>Título:</label>
      <input type='text' placeholder='Digite o Título'/>
    </>
)};

const Subtitle = (props) => {
  return (
    <>
      <label>Subtítulo:</label>
      <input type='text' placeholder='Digite o Subtítulo'/>
    </>
)};

const Text = (props) => {
  return (
    <>
    <label>Texto:</label>
    <textarea placeholder='Digite o Texto'/>
  </>
)};

const Separator = (props) => {
  return (
  <h1>Separator</h1>
)};

const Photo = (props) => {
  return (
  <h1>Photo</h1>
)};

const Video = (props) => {
  return (
  <h1>Video</h1>
)};

const Audio = (props) => {
  return (
  <h1>Audio</h1>
)};

const Gallery = (props) => {
  return (
  <h1>Gallery</h1>
)};

const Connection = (props) => {
  return (
  <h1>Connection</h1>
)};

const Link = (props) => {
  return (
    <>
      <label>Link Externo:</label>
      <input type='url' placeholder='Digite o Link Externo'/>
    </>
)};

const Resource = (props) => {
  return (
  <h1>Resource</h1>
)};

const CustomField = (props) => {
  return (
    <>
      <label>Custom Field:</label>
      <input type='text' placeholder='Digite o Custom Field'/>
    </>
)};

const itemDefiner = (props) => {

  let item = null;

  switch (props.docType) {
    case (ElementTypes.SNIPPET):
      item = Snippet(props);
      break;
    case (ElementTypes.LONGTITLE):
      item = LongTitle(props);
      break;
    case (ElementTypes.LONGDESCRIPTION):
      item = LongDescription(props);
      break;
    case (ElementTypes.TITLE):
      item = Title(props);
      break;
    case (ElementTypes.SUBTITLE):
      item = Subtitle(props);
      break;
    case (ElementTypes.TEXT):
      item = Text(props);
      break;
    case (ElementTypes.SEPARATOR):
      item = Separator(props);
      break;
    case (ElementTypes.PHOTO):
      item = Photo(props);
      break;
    case (ElementTypes.VIDEO):
      item = Video(props);
      break;
    case (ElementTypes.AUDIO):
      item = Audio(props);
      break;
    case (ElementTypes.GALLERY):
      item = Gallery(props);
      break;
    case (ElementTypes.CONNECTION):
      item = Connection(props);
      break;
    case (ElementTypes.LINK):
      item = Link(props);
      break;
    case (ElementTypes.RESOURCE):
      item = Resource(props);
      break;
    case (ElementTypes.CUSTOM):
      item = CustomField(props);
      break;
    default:
      item = <h1>{props.docType}</h1>;
  }
  return item;
}


const DocElements = (props) => (
  <div className={classes.Item}>
    {itemDefiner(props)}
  </div>
  )

export default DocElements;
