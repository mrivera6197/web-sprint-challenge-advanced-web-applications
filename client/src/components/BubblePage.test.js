import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles'
import ColorList from './ColorList'

import { mockData } from '../api/mockData'
import { fetchColors as mockFetchColors } from '../api/fetchColors'

jest.mock('../api/fetchColors')

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(mockData)
  render(<BubblePage />)
  render(<Bubbles colors={mockData}/>)
  render(<ColorList colors={mockData}/>)

  const bubbles = await screen.findAllByTestId('bubbles')
  expect(bubbles).toHaveLength(11)

  const lilac = await screen.getByText(/lilac/i)
  fireEvent.click(lilac)

  const edit = await screen.getByText(/edit color/i)

});
