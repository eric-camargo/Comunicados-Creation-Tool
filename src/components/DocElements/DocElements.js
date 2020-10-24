import React from 'react';


const Snippet = (props) => {
  return (
  <h1>SNIPPET</h1>
)};

const LongTitle = (props) => {
  return (
  <h1>LongTitle</h1>
)};

const LongDescription = (props) => {
  return (
  <h1>LongDescription</h1>
)};

const Title = (props) => {
  return (
  <h1>Title</h1>
)};

const Subtitle = (props) => {
  return (
  <h1>Subtitle</h1>
)};

const Text = (props) => {
  return (
  <h1>Text</h1>
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
  <h1>Link</h1>
)};

const Resource = (props) => {
  return (
  <h1>Resource</h1>
)};

const CustomField = (props) => {
  return (
  <h1>CustomField</h1>
)};

const itemDefiner = (props) => {

  let item = null;

  switch (props.docType) {
    case ('snippet'):
      item = Snippet(props);
      break;
    case ('longTitle'):
      item = LongTitle(props);
      break;
    case ('longDescription'):
      item = LongDescription(props);
      break;
    case ('title'):
      item = Title(props);
      break;
    case ('subtitle'):
      item = Subtitle(props);
      break;
    case ('text'):
      item = Text(props);
      break;
    case ('separator'):
      item = Separator(props);
      break;
    case ('photo'):
      item = Photo(props);
      break;
    case ('video'):
      item = Video(props);
      break;
    case ('audio'):
      item = Audio(props);
      break;
    case ('gallery'):
      item = Gallery(props);
      break;
    case ('connection'):
      item = Connection(props);
      break;
    case ('link'):
      item = Link(props);
      break;
    case ('resource'):
      item = Resource(props);
      break;
    case ('custom'):
      item = CustomField(props);
      break;
    default:
      item = <h1>{props.docType}</h1>;
  }
  return item;
}


const DocElements = (props) => (
  <div>
    {itemDefiner(props)}
  </div>
  )

export default DocElements;
