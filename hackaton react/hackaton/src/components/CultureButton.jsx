import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function CultureButton({ cultura }) {
  return (
    <Link href={`/culture/${cultura}`} passHref>
      <Button variant="primary">
        Conocer más sobre {cultura}
      </Button>
    </Link>
  );
}

export default CultureButton;