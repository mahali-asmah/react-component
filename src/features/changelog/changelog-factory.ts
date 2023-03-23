import { build, perBuild } from "@jackfranklin/test-data-bot";
import { faker } from "@faker-js/faker";
import { ReleaseNote } from "../../utils/types";

export const createPopulatedNote = build<ReleaseNote>({
  fields: {
    id: perBuild(() => faker.datatype.uuid()),
    title: perBuild(() => faker.lorem.words()),
    content: perBuild(() => faker.lorem.sentences()),
    status: perBuild(() => faker.helpers.arrayElement(["draft", "published"])),
    coverImage: perBuild(() => faker.image.imageUrl()),
    isArchived: perBuild(() => faker.datatype.boolean()),
    url: perBuild(() => faker.internet.url()),
    authorId: perBuild(() => faker.datatype.uuid()),
    projectId: perBuild(() => faker.datatype.uuid()),
    createdAt: perBuild(() => faker.date.recent().toISOString()),
    updatedAt: perBuild(() => faker.date.recent().toISOString()),
    publishedAt: perBuild(() =>
      faker.datatype.boolean() ? faker.date.recent().toISOString() : null
    ),
  },
});

export const createMultiplePopulatedNotes = (count = 1) =>
  createPopulatedNote.many(count);
