import _, { uniqueId } from 'lodash';
import React, { MouseEventHandler, FC } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

export type Breadcrumb = {
    text: string,
    href: string
}

export type BreadcrumbsProps = {
    elements: Breadcrumb[],
    separator: string
}

export function last <T> (xs: T[]) {
    return xs[xs.length - 1]
}

export function butlast <T> (xs: T[]) {
    return xs.slice(0, xs.length - 1)
}

export function interpose <T> (x: T, xs: T[]): T[] {
  return [...butlast(xs).reduce((acc: T[], cur) => [...acc, cur, x], []), last(xs)]
}

export const Breadcrumbs = ({ elements, separator = ">" }: BreadcrumbsProps) => {


    const crumbs = elements.filter(el => el.text !== "").map(({ text, href, }) => (
        <Link key={href} className='breadcrumb' to={href}>{text}</Link>
    ))

    return (
        <div className="breadcrumbs">
            {interpose(
                <span>{separator}</span>,
                crumbs
            )}
        </div>
    )
}