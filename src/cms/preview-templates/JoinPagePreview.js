import React from 'react'
import PropTypes from 'prop-types'
import { JoinPageTemplate } from '../../templates/join-page'

const JoinPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <JoinPageTemplate
      image={getAsset(data.image)}
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />)
}

JoinPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default JoinPagePreview
