import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import PaymentSummary from './PaymentSummary'
import userEvent from '@testing-library/user-event';

vi.mock('axios');

describe('PaymentSummary component', ()=>{
  let getCartItems; 
  let paymentSummary;

  beforeEach(()=>{
    getCartItems=vi.fn();

    paymentSummary = {
      totalItems: 3,
      productCostCents: 4275,
      shippingCostCents: 499,
      totalCostBeforeTaxCents: 4774,
      taxCents: 477,
      totalCostCents: 5251
    };
  })

  it('Check Paymentsummary Component', async ()=>{
    render(
    <MemoryRouter>
      <PaymentSummary paymentSummary={paymentSummary} getCartItems={getCartItems} />
    </MemoryRouter>
  );

  expect(
    screen.getByText('Items 3:')
  ).toBeInTheDocument();

  expect(
    screen.getByTestId('payment-summary-product-cost')
  ).toHaveTextContent('$42.75'); 

  expect(
    screen.getByTestId('payment-summary-shipping-cost')
  ).toHaveTextContent('$4.99'); 

  expect(
    screen.getByTestId('payment-summary-total-cost-before-tax')
  ).toHaveTextContent('$47.74'); 

  expect(
    screen.getByTestId('payment-summary-tax')
  ).toHaveTextContent('$4.77'); 

  expect(
    screen.getByTestId('payment-summary-total')
  ).toHaveTextContent('$52.51')
  });
});

