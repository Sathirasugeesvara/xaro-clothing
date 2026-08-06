const SizeGuide = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-hero">
        <h1>Size Guide</h1>
        <p>Measurements are in centimetres — measure yourself, not old clothes, for the best fit</p>
      </div>

      <div className="shipping-section">
        <h2>How to Measure</h2>
        <ul>
          <li><strong>Chest:</strong> around the fullest part of your chest, arms relaxed at your sides</li>
          <li><strong>Waist:</strong> around your natural waistline, keeping the tape snug but not tight</li>
          <li><strong>Hips:</strong> around the fullest part of your hips</li>
          <li><strong>Length:</strong> from the top of the shoulder down to the hem</li>
        </ul>

        <h2>Tops (Shirts, Tees, Jackets)</h2>
        <table className="size-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest (cm)</th>
              <th>Length (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>S</td><td>88–92</td><td>66</td></tr>
            <tr><td>M</td><td>96–100</td><td>68</td></tr>
            <tr><td>L</td><td>104–108</td><td>70</td></tr>
            <tr><td>XL</td><td>112–116</td><td>72</td></tr>
            <tr><td>XXL</td><td>120–124</td><td>74</td></tr>
          </tbody>
        </table>

        <h2>Bottoms (Pants, Shorts)</h2>
        <table className="size-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Waist (cm)</th>
              <th>Hip (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>S</td><td>74–78</td><td>94–98</td></tr>
            <tr><td>M</td><td>80–84</td><td>100–104</td></tr>
            <tr><td>L</td><td>86–90</td><td>106–110</td></tr>
            <tr><td>XL</td><td>92–96</td><td>112–116</td></tr>
            <tr><td>XXL</td><td>98–102</td><td>118–122</td></tr>
          </tbody>
        </table>

        <h2>Still Unsure?</h2>
        <p>
          Message us on WhatsApp with your measurements and we'll help you pick the right size before you order.
        </p>
      </div>

      <br /><br /><br />
    </div>
  );
};

export default SizeGuide;
