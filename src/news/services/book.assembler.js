import {Book} from "../model/book.entity.js"

export class BookAssembler {
        static toEntityFromResource(resource) {
            return new Book({
                title: resource.title,
                originalTitle: resource.originalTitle,
                description: resource.description,
                pages: resource.pages,
                cover: resource.cover,
            });
        }

        static toEntitiesFromResponse(response) {
            if (!Array.isArray(response.data)) {
                console.error('Invalid response: expected array of books');
                return [];
            }

            return response.data.map(resource => this.toEntityFromResource(resource));
        }
    }