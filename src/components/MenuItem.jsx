'use client'
import React from "react";
import Link from 'next/link'

const MenuItem = ({mn}) => {
  return (
    <div>
        <Link href={mn.url}>{mn.name}</Link>
    </div>
  )
}

export default MenuItem