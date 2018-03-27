let {
    Entity
} = Draft

let findEntities = function findEntities(entityType, contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === entityType
      );
    },
    callback
  )
}
module.exports = findEntities
