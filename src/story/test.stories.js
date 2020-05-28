import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Book from '../components/Book'
import Menu from '../components/Menu';


export default { title: 'Libarary'};

export const book = () => <Book book={{_id: "123893891",
                                        cover: "https://res.cloudinary.com/nhatminhuet/image/upload/v1588399069/single/gu9sdcxix1roy3gcsmpl.jpg",
                                        title: "Dac Nhan Tam",
                                        description: "This is a description of a book."
                                    }} />;
export const menu = () => <Menu />