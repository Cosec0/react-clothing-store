import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KUNwESJsTS1dxelhtMgRapooJwOtbFjIY4TYyp6Wiote5cKhwjCbn0R6TbZnIQzXPa4y5mLEtQ4OdYdHvkGtww6006cS7SC5f';
  
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
  
    return (
        <StripeCheckout
            label='Pay Now'
            name='Just Another Clothes store'
            billingAddress
            shippingAddress
            image='https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
  };
  
  export default StripeCheckoutButton;