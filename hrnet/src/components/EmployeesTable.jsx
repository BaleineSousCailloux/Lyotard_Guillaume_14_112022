import React from 'react'
import { useStore } from 'react-redux'
import { Table, Pagination, Input, InputGroup } from 'rsuite'
import { useState, useRef } from 'react'
import SearchIcon from '@rsuite/icons/Search'

function EmployeesTable() {
  const store = useStore()
  const searchInput = useRef(null)
  const { Column, HeaderCell, Cell } = Table
  const datas = store.getState().employees.employeesList
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [sortColumn, setSortColumn] = useState()
  const [sortType, setSortType] = useState()
  const [searchData, setSearchData] = useState()
  const [loading, setLoading] = useState(false)
  const handleChangeLimit = (dataKey) => {
    setPage(1)
    setLimit(dataKey)
  }
  const data = datas.filter((v, i) => {
    const start = limit * (page - 1)
    const end = start + limit
    return i >= start && i < end
  })
  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn]
        let y = b[sortColumn]
        if (typeof x === 'string') {
          x = x.charCodeAt()
        }
        if (typeof y === 'string') {
          y = y.charCodeAt()
        }
        if (sortType === 'asc') {
          return x - y
        } else {
          return y - x
        }
      })
    }
    return data
  }

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSortColumn(sortColumn)
      setSortType(sortType)
    }, 500)
  }

  const handleSearchClick = () => {
    setSearchData(searchInput.current.value)
  }

  return (
    <div className="data-table">
      <div className="search-bar">
        <InputGroup size="md">
          <Input
            ref={searchInput}
            type="text"
            id="searchData"
            name="searchData"
          />
          <InputGroup.Button
            onClick={() => {
              handleSearchClick()
            }}
          >
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </div>
      <div className="my-table">
        <Table
          autoHeight
          className="my-table-content"
          id="table"
          data={getData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
          loading={loading}
        >
          <Column width={110} align="left" fixed sortable>
            <HeaderCell>FirstName</HeaderCell>
            <Cell dataKey="firstName" />
          </Column>

          <Column width={110} align="left" fixed sortable>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="lastName" />
          </Column>

          <Column width={100} align="left" fixed sortable>
            <HeaderCell>Start Date</HeaderCell>
            <Cell dataKey="dateStart" />
          </Column>

          <Column width={135} align="left" fixed sortable>
            <HeaderCell>Department</HeaderCell>
            <Cell dataKey="department" />
          </Column>
          <Column width={115} align="left" fixed sortable>
            <HeaderCell>Date of Birth</HeaderCell>
            <Cell dataKey="dateBirth" />
          </Column>
          <Column width={110} align="left" fixed sortable>
            <HeaderCell>Street</HeaderCell>
            <Cell dataKey="street" />
          </Column>
          <Column width={110} align="left" fixed sortable>
            <HeaderCell>City</HeaderCell>
            <Cell dataKey="city" />
          </Column>
          <Column width={75} align="left" fixed sortable>
            <HeaderCell>State</HeaderCell>
            <Cell dataKey="stateName" />
          </Column>
          <Column width={90} align="left" fixed sortable>
            <HeaderCell>Zip Code</HeaderCell>
            <Cell dataKey="zipCode" />
          </Column>
        </Table>
        <div className="pageOptions">
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="md"
            layout={['total', '-', 'limit', '|', 'pager', 'skip']}
            total={datas.length}
            limitOptions={[10, 30, 50]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeesTable
