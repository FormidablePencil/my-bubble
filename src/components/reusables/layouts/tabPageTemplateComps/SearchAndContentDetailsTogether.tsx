import React, { useState } from 'react'
import TabBar from '../TabBar'

const SearchAndContentDetailsTogether = ({ contentDetailsSection, searchFeatureSection }) => {
  const defaultTab = 'Details'
  const [focusedTab, setFocusedTab] = useState(defaultTab)
  const tabProps = [
    { title: 'Details' },
    { title: 'Search' }
  ]

  const onChangeFocusedTab = (title) => setFocusedTab(title)

  return (
    <div>
      <TabBar
        defaultTab={defaultTab}
        tabProps={tabProps}
        onChangeFocusedTab={onChangeFocusedTab}
      />
      {focusedTab === 'Details' ?
        <>{contentDetailsSection}</>
        : focusedTab === 'Search' &&
        <>{searchFeatureSection}</>
      }
    </div>
  )
}

export default SearchAndContentDetailsTogether
