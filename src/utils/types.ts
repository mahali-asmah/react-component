/**
 * Arbitrary factory function for object of shape `Shape`.
 */
export type Factory<Shape> = (object?: Partial<Shape>) => Shape;

export interface ReleaseNote {
  id: string;
  title: string;
  content: string;
  status: string;
  coverImage: string;
  isArchived: boolean;
  url: string;
  authorId: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}
